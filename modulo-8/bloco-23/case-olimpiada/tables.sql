-- Active: 1662679144787@@35.226.146.116@3306@joy-419687-jonathan-souza
CREATE TABLE competicao (
    id VARCHAR(80) PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    encerrada BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE competidores (
    id_competicao VARCHAR(80) NOT NULL,
    atleta VARCHAR(80) NOT NULL,
    valor VARCHAR(40) NOT NULL,
    unidade VARCHAR(20) NOT NULL,
    FOREIGN KEY (id_competicao) REFERENCES competicao(id)
)