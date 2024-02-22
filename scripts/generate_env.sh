#!/usr/bin/env bash

## Este script genera el archivo .env
## Recibe como parámetros o deben estar seteados en el entorno:
## $1 DB_USERNAME
## $2 DB_PASSWORD

################ Asignación de variables por parámetros ################
echo $DB_USERNAME
echo $DB_PASSWORD

if [[ ! $DB_USERNAME ]]; then
    DB_USERNAME=${1}
fi

if [[ ! $DB_PASSWORD ]]; then
    DB_PASSWORD=${2}
fi

################ Creo variables de trabajo ################

WORKSCRIPT="$(pwd)"

################ Comprueba requisitos ################

## En caso de ser root se aborta.
if [[ $(whoami) = 'root' ]]; then
    echo 'No puedes ejecutar este script como root'
    exit 1
fi

## En caso de no encontrar archivos esenciales para la ejcución se aborta.
if [[ ! -f "${WORKSCRIPT}/env.example.production" ]] ||
   [[ ! -d "${WORKSCRIPT}/scripts" ]] ||
   [[ ! -f "${WORKSCRIPT}/scripts/functions.sh" ]]; then
    echo 'Este script solo puede ser ejecutado desde la raíz del proyecto.'
    exit 1
fi

## En caso de existir un archivo .env se omiten operaciones.
if [[ -f "${WORKSCRIPT}/.env" ]]; then
    echo 'Ya existe un archivo .env en el proyecto, omitiendo operaciones.'
    exit 0
fi

################ Incluyo archivos de funciones ################

source "${WORKSCRIPT}/scripts/functions.sh"

################ Comienza el flujo de generar .env ################

## Creo el archivo .env a partir del archivo con parámetros predefinidos.

cp "${WORKSCRIPT}/.env.example.production" "${WORKSCRIPT}/.env"
chmod ug+rw "${WORKSCRIPT}/.env"

## General

replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'VUE_APP_PUSHER_KEY' "${VUE_APP_PUSHER_KEY}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'VUE_APP_PUSHER_FORCE_TLS' "${VUE_APP_PUSHER_FORCE_TLS}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'VUE_APP_PUSHER_ENCRYPTED' "${VUE_APP_PUSHER_ENCRYPTED}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'VUE_APP_PUSHER_HOST' "${VUE_APP_PUSHER_HOST}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'VUE_APP_PUSHER_PORT' "${VUE_APP_PUSHER_PORT}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'VUE_APP_API_URL' "${VUE_APP_API_URL}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'APP_NAME' "${APP_NAME}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'APP_NAME' "${APP_NAME}"
replace_or_add_var_in_file "${WORKSCRIPT}/.env" 'APP_NAME' "${APP_NAME}"
