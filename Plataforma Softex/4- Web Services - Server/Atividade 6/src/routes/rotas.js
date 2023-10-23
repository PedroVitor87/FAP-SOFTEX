const express = require('express');
const routes = express.Router();

const arrayAlunos = require('../data/alunos');

routes.get("/alunos", (req, res) => { //Lista de alunos cadastrados
    try{
        res.status(200).json(arrayAlunos);
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    };
});

routes.get("/alunos/:id", (req, res) => { //Buscar por aluno especifico a partir do ID
    try{
        const idAluno = Number(req.params.id)

        if(idAluno){
            const encontrarAluno = arrayAlunos.find(aluno => aluno.id === idAluno);
            if(encontrarAluno){
                res.status(200).json(encontrarAluno);
            }else{
                res.status(404).send("Aluno não encotrado");
            };
        }else{
            res.status(400).send("Id do aluno não fornecido");
        }
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    };
});

routes.post("/alunos/cadastrar", (req, res) => {
    try{
        const {id, nome, idade} = req.body;
        const novoAluno = {id, nome, idade}
        arrayAlunos.push(novoAluno);
        res.status(201).json({ message: 'Aluno cadastrado com sucesso', aluno: novoAluno });
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    };
});

routes.put("/alunos/atualizar/:id", (req, res) => {
    try{
        const alunoId = Number(req.params.id);
        const {newAluno, newIdade} = req.body;
        let atualizacaoAluno = false;
        for(const aluno of arrayAlunos){
            if(aluno.id === alunoId){
                aluno.nome = newAluno;
                aluno.idade = newIdade;
                atualizacaoAluno = true;
                break;
            };
        } if (atualizacaoAluno) {
            res.status(200).send("Aluno atualizado com sucesso");
        } else {
            res.status(404).send("Aluno não encontrado");
        };

    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Erro interno do servidor' });
    };
});

routes.delete("/alunos/excluir/:id", (req, res) => {
    try {
        const alunoId = Number(req.params.id);
        const index = arrayAlunos.findIndex(aluno => aluno.id === alunoId);
        if (index !== -1) {
            const alunoRemovido = arrayAlunos.splice(index, 1)[0];
            console.log("Aluno excluído com sucesso:", alunoRemovido);
            res.status(200).json({ message: "Aluno excluído com sucesso", aluno: alunoRemovido });
        } else {
            res.status(404).send("Aluno não encontrado");
        };
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro interno do servidor" });
    };
});

module.exports = routes;
