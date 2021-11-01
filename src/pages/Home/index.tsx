import React from "react";
import { Profile } from "../../components/Profile";
import { COntainer, Header } from "./styles";


export function Home(){
    return(
        <>
        <COntainer>
            <Header>
                <Profile />
            </Header>
        </COntainer>
        </>
    )
}