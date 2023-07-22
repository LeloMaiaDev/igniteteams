import { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Container, Content, Icon } from "./styles";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

export function NewGroup(){

    const navigation = useNavigation();

    function handleNew(){
        navigation.navigate('players', { group });
    }
    
    const [group, setGroup] = useState('');

    return(
        <Container>
            <Header showBackButton />
            <Content>
                <Icon />
                <Highlight
                    title='Nova turma'
                    subtitle='Crie a turma para adicionar pessoas'
                />
                <Input
                    placeholder='Nome da turma'
                    onChangeText={setGroup}
                />
                <Button
                    title='Criar'
                    style={{ marginTop: 10 }}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}