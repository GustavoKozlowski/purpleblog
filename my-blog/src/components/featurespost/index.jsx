import React from "react";
import "./styles.css";
import paisagem from "./../../assets/img/paisagem.jpg";
import AuthorBadge from "../author-badge";
import { Link } from "react-router-dom";


export default function FeaturePost() {
  return (
    <div className="featured-post-container">
      <div>
        <img
          className="featured-post-img"
          src={paisagem}
          alt="foto de uma bela paisagem"
        />
      </div>
      <div>
        <p className="featured-post-date">July 24, 2020</p>
        <Link to ='#'>
          <h2 className="featured-post-title">
            Lorem ipsum dolor sit amet consectetur adipisicin
          </h2>
        </Link>
        <p className="featured-post-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
          repellendus dolore earum veritatis consequuntur autem quas harum
          laudantium, obcaecati tempore illum nobis ut cumque veniam, minus
          ipsum, id iste officiis! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Consequuntur, Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sunt suscipit repudiandae, dolore soluta dolorum sed
          eos assumenda excepturi perferendis maiores necessitatibus veniam
          eligendi ratione recusandae in, cupiditate laboriosam, pariatur
          officiis! incidunt quos ipsam nobis temporibus nam maxime distinctio
          architecto quod maiores veritatis! Dolorem animi ex repudiandae earum
          labore vitae ad possimus! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Aperiam quas facilis praesentium eaque nobis
          temporibus alias soluta sit, repudiandae ab architecto non sunt
          dolorem corrupti vel optio debitis error doloremque.
        </p>
        <AuthorBadge />
      </div>
    </div>
  );
}
