# Flow Git

Descripción del flujo de trabajo en git

## Instalacion git

[Pagina oficial de git](https://git-scm.com/downloads)

## Instalacion commitizen

Commitizen es una herramienta para mejorar nuestros commits 

Para instalar seguir los siguientes pasos 


### Paso 1:

Instalar node y npm:

[Node](https://nodejs.org/en)

Comprueba si tiene todo instalado con 

```sh
node -v
npm -v
```

### Paso 2:

En el terminal escriba

```sh
npm install -g commitizen cz-conventional-changelog
```

crear un fichero "~/.czrc", dentro de este fichero copie lo siguiente:

```sh
{ "path": "cz-conventional-changelog" }
```

### Paso 3:

A partir de ahora utilizad este commando en lugar de git commit -m "xxx" para los commits 

```sh
 git cz
```


## Flujo de trabajo git 

Finalmente hemos decido lo siguiente:

- Habrá una rama principal(main) que contiene un codigo funcional
- Una rama de copia del main que será develop donde podremos modificar
- A partir de la rama de develop se expandira por epicas (User,Events,Map,Review,...etc)
- Y para cada rama de epica una rama de un o un conjunto de features (ej: para user, login + logout + ... , sign with goole)

## Uso de git: 

### Lo basico:

las comandos basicos son lo siguientes: 

Para guardar, donde xxx es el fichero que has añadido o hecho cambios

```sh
git add xxx 
```

Para el commit usad "git cz" en lugar de "git commit -m "xxx" "

git push 

### Para estar siempre actualizado 

```sh
git pull 
```

### Para cambiar y crear rama 

```sh 
git checkout -b nombre_rama 
```

### Para cambiar de rama 

```sh
git checkout nombre_rama
```

### Para ir a uno de los commits anterior

```sh
git revert xxx
```

### Para borrar hasta el commit xxx 

```sh
git reset xxx
```


### Un pequeño ejemplo de la utilizacion:

Imaginad estamos en el main y ahora queremos añadir un nuevo feature para user llamado "login" 
y que hemos modificado un users.js en el repo de backend

```sh
# Ahora estamos en el main -> vamos al develop 
git checkout develop 
# Creamos una rama de user 
git checkout -b user

# Si no hay gente que se encarga de la misma rama se queda asi, pero ahora supongamos que hay 3 personas más que se encarga de otros caracteristicas relacionado con user
# Aqui hemos creado una rama a partir de user
git checkout -b login-feature 

git add users.js
git cz 
# seguir los pasos que se muestre en la pantalla 
git push

# cuando este feature este finalizada se hace el merge
# cambiamos a la rama de user 
git checkout user
# hacemos merge
git merge login-feature

# Si todo esta correcto podemos borrar la rama login-feature 
git branch -D login-feature
```


