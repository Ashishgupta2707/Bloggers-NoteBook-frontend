import { useState , useEffect , useContext} from 'react';
// import pic from '../create/tech.jpg';
import '../create/CreatePost.css';
import { AddToPhotos as Add } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api.js';

const initialPost = {
    title: '',
    description: '',
    picture: '',
    username: '',
    categories: '',
    createdDate:new Date()
}

const CreatePost = () => {
    
    const location = useLocation();
    const navigate = useNavigate();


    const [post, setPost] = useState(initialPost);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);

    const url = post.picture ? post.picture: 'https://www.internetgovernance.org/wp-content/uploads/iStock-597935408-1400x400.jpg';

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                //API call
                const response = await API.uploadFile(data);
                post.picture = response.data;
            }
        }
        getImage();

        post.categories = location.search?.split('=')[1] || 'All';
        post.username = account.username;
    }, [file]);

    const handlechange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
        
    }

    const savepost = async () => {
        let response = await API.createPost(post);
        if (response.isSuccess) {
            navigate('/');
        }
    }

    return (
        <>
            <div className="container">
                <img src={url} class="img-fluid pic" alt="..." />
                
                <div className="formcontrolpost">
                    <label htmlFor="fileinput">
                        <Add fontSize='large'color='action'/>
                    </label>
                    <input type="file" id='fileinput' style={{ display: 'none' }} onChange={(e)=>setFile(e.target.files[0])}/>


                    <input type="Text" className='titlepost' placeholder="Title" onChange={(e)=>handlechange(e)} name='title'></input>


                    <button type="button" class="btn btn-success" onClick={ () => savepost()}>Publish</button>
                    
                </div>

                <textarea class="form-control textsome" id="exampleFormControlTextarea1" rows="4" placeholder='Describe Something' onChange={(e)=>handlechange(e)} name='description' ></textarea>
            </div>
        </>
    )
}

export default CreatePost;