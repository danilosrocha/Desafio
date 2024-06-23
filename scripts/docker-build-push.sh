#!/usr/bin/env bash
# shellcheck disable=SC1065

printf "\nBuilding"
# cd ../
pwd
docker build -t desafio:latest --no-cache .

printf "\nPushing"
docker tag desafio:latest rochasolutions/desafio:latest
docker push rochasolutions/desafio:latest

printf "\nDone"

# Aguarda a entrada do usuário para evitar que o terminal feche
read -rp "Pressione Enter para sair"
