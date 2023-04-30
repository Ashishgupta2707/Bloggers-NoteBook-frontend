import "../post/post.css";
import { addElipsis } from '../../../utils/common-utils';

const Post = ({ post }) => {

    const url = post.picture ? post.picture: 'https://www.internetgovernance.org/wp-content/uploads/iStock-597935408-1400x400.jpg';

    return (
        <>
            
            <div className="card mb-4 carbox" id="boxi" style={{"max-width": "580px"}}>
                    <div className="row g-0  ">
                        <div className="col-md-4">
                        <img src={url} className="img-fluid rounded-start postbox" alt="..."/>
                        </div>
                        <div className="col-md-8 ">
                        <div className="card-body cardbackg">
                            <p className="card-text categories">{post.categories}</p>
                            <h4 className="card-title title">{addElipsis(post.title,20)}</h4>         
                            <p className="card-text categories">{post.username}</p>
                            <p className="card-text Details">{addElipsis(post.description,42)}</p>
                            <p className="card-text"><small className="text-body-secondary">{ post.createdDate}</small></p>
                        </div>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default Post;