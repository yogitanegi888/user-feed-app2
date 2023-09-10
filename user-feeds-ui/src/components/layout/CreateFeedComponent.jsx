import axios from "axios";
import { useFormik } from "formik"
import { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import authenticationService from "../../services/authentication-service";

export default function CreateFeedComponent() {

    let [postImage, setPostImage] = useState(null);
    let history = useHistory();

    const onSubmit = async (payload) => {
        let formData = new FormData();
        formData.append('image', postImage);
        formData.append('intrested', payload.intrested.join(','));
        formData.append('description', payload.description);
        let response = await axios.post('http://localhost:8000/apis/create-feeds', formData, {
            headers: {
                Authorization: `Bearer ${authenticationService.token}`
            }
        });
        if (response.data.success) {
            alert("Feed Posted");
            history.push('/feeds');
        } else {
            alert("Unable to post feed");
        }

    }

    const formik = useFormik({
        initialValues: {
            intrested: [],
            description: '',
        },
        onSubmit
    });

    return (
        <div>
            <h6>Create New Feed</h6>
            <form className="p-4" onSubmit={formik.handleSubmit}>
                <div className="row">
                    <div className="col form-group">
                        <label htmlFor="">Post Text</label>
                        <input type="text" className="form-control" name="description" value={formik.values.description} onChange={formik.handleChange} placeholder="What's on your mind?" />
                    </div>
                    <div className="col form-group">
                        <label htmlFor="">Its Related To</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="intrested" onChange={formik.handleChange} id="inlineCheckbox1" value="bollywood" />
                                <label className="form-check-label" htmlFor="inlineCheckbox1">Bollywood</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="intrested"  onChange={formik.handleChange} id="inlineCheckbox2" value="music" />
                                <label className="form-check-label" htmlFor="inlineCheckbox2">Music</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="checkbox" name="intrested" onChange={formik.handleChange} id="inlineCheckbox3" value="politics" />
                                <label className="form-check-label" htmlFor="inlineCheckbox3">Politics</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col px-">
                        <input type="file" className="custom-file-input" name="image" onChange={(event) => setPostImage(event.target.files[0])} id="customFile"/>
                            <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                    </div>
                    <div className="col">
                        <button type="submit" className="btn btn-primary mx-3">Create Post</button>
                        <Link to={`/feeds`}>View Feeds</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}