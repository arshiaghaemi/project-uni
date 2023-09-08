import React from "react";
import { css } from "@emotion/css";
import JobCard from '../jobCard/jobCard'

const JobCardList = ({topics, loading}) => {
    return(
        <div>
        {loading && 
        (
            <div
              className={css`
                height: 21px;
                width: 100%;
                min-height: 300px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              <img
                alt="loading"
                className={css`
                  width: 40px;
                  position: absolute;
                `}
                src="images.jpeg"
              />
            </div>
          )
        }
        {!loading && topics && topics.map((item) => (
                <JobCard key={`JobCard-${item.id}`} data={item} />
            ))}
        
        </div>
    )
}

export default JobCardList