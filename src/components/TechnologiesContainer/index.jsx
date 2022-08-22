import React from "react";
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3, DiSass, DiReact } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { BsWordpress } from 'react-icons/bs';
import TechnologyCard from "../TechnologyCard";

import './styles.sass';

const TechnologiesContainer = () => {
    return (
        <section className="technologies-container">
            <div className="technologies-wrapper">
                <div className="technologies-col-1">
                    <h1 className="technologies-title">Tecnologias</h1>
                    <p className="technologies-context">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem natus sunt repudiandae. Ratione, iusto ducimus, aliquam assumenda minima id nam quis quod totam, beatae eveniet maxime nisi porro quia iure!</p>
                </div>
                <div className="technologies-col-2">
                    <TechnologyCard
                        technologyIcon={<AiFillHtml5 />}
                        technologyClass="html"
                        technologyText={"HTML5"}
                    />

                    <TechnologyCard
                        technologyIcon={<DiCss3 />}
                        technologyText={"CSS"}
                        technologyClass="css"
                    />

                    <TechnologyCard
                        technologyIcon={<SiJavascript />}
                        technologyText={"JavaScript"}
                        technologyClass="javascript"
                    />

                    <TechnologyCard
                        technologyIcon={<DiSass />}
                        technologyText={"Sass"}
                        technologyClass="sass"
                    />

                    <TechnologyCard
                        technologyIcon={<BsWordpress />}
                        technologyText={"WordPress"}
                        technologyClass="wordpress"
                    />

                    <TechnologyCard
                        technologyIcon={<DiReact />}
                        technologyText={"ReactJS"}
                        technologyClass="reactjs"
                    />
                </div>
            </div>
        </section>
    );
};

export default TechnologiesContainer;