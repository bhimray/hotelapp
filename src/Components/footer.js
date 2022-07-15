import React from "react"
import { ReactDOM } from "react"
import { NavLink } from "react-router-dom"
import "./footer.css"
import DeckIcon from '@mui/icons-material/Facebook';
import DeckIcon from '@mui/icons-material/Twitter';
import DeckIcon from '@mui/icons-material/LinkedIn';
import DeckIcon from '@mui/icons-material/Deck';
import DeckIcon from '@mui/icons-material/Deck';
import Twitter from "@mui/icons-material/Twitter";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function Container5(){
    return(
        <footer className="pageFooter">
            <div className="lock">
                <div className="pageFooter-wrapper">
                    <div className="pageFooter--left">
                        <a className="logo" href="/">
                            <img src="https://www.chron.com/img/logos/black/logo.svg">
                            </img>
                        </a>
                        <ul className="pageFooter-left-social">
                            <li href="facebook"><Facebook/></li>
                            <li href="twitter"><Twitter/></li>
                            <li href="instagram"><Instagram/></li>
                            <li href="linkedin"><LinkedIn/></li>
                            
                        </ul>
                    </div>
                    <div className="pageFooter--right">
                        <div className="pageFooter-top-line">
                            <a href="#content"className="return">
                                <span class="full">Return to</span>
                                "Top"
                            </a>
                        </div>
                        <div className="pageFooter-right-link">
                            <div>
                                <ul className="wrapper" role="presentation">
                                    <li>
                                        <div class="title" role="headeing" aria-level="2">About</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="/privacy_policy" role="listitem">Privacy Notice</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Californica privacy rights</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Interest Based</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Terms of use</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Our Company</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="title" role="headeing" aria-level="2">About</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="/privacy_policy" role="listitem">Privacy Notice</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Californica privacy rights</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Interest Based</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Terms of use</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Our Company</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div class="title" role="headeing" aria-level="2">About</div>
                                        <ul className="section" role="presentation">
                                            <li>
                                                <a href="/privacy_policy" role="listitem">Privacy Notice</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Californica privacy rights</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Interest Based</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Terms of use</a>
                                            </li>
                                            <li>
                                                <a role="listitem">Our Company</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}