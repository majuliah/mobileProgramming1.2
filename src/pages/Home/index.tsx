import React from "react";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { COntainer, Header } from "./styles";


export function Home(){
    return(
        <>
        <COntainer>
            <Header>
                <Profile />
                    <ButtonAdd />
            </Header>
        </COntainer>
        </>
    )
}