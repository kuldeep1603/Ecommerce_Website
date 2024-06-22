import React from 'react';
// style 
import "./BreadCums.css";
// router 
import { Link } from 'react-router-dom';

const BreadCums = ({ data }) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    {
                        data.map((CurLinks, index) => {
                            const { title, link, active } = CurLinks;
                            return (
                                <li class="breadcrumb-item" key={index}>
                                    <Link className={`${active}`} to={link}>{title.length > 15 ? title.slice(0, 12) + ".." : title}</Link>
                                </li>
                            )
                        })
                    }
                </ol>
            </nav>
        </>
    )
}

export default BreadCums
