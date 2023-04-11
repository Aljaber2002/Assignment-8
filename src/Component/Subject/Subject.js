import React from 'react';

const Subject = (props) => {
    // console.log(study)
    const { study, func } = props
    // console.log(study)
    const { Age, Time, description, name, picture } = study




    return (
        <div>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>If a dog chews shoes whose shoes does he choo?</p>
                    <p>For Age: {Age}</p>
                    <p>Time Required: {Time}min</p>
                    <div className="card-actions">
                        <button onClick={() => func(study)} className="btn btn-success btn-block text-white hover:bg-[green] ">Add to cart </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subject;