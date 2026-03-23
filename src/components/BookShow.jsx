import React from "react";
import "bulma/css/bulma.min.css";

export default function BookShow({ bookName }) {
    return (
        <div class="card">
            {/* <header class="card-header">
                <p class="card-header-title">Component</p>
            </header> */}
            <div class="card-content">
                <div class="content">
                    {bookName}
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item">Close</a>
            </footer>
        </div>
    )
}