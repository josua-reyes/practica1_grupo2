# Practica GIT Grupo 3
Practica GIT Grupo 3

## Integrantes
- Donahi Lisseth Garcia Melgar / 5390-16-8959
- Pedro Josue Cruz Garcia / 9941-14-22280
- Julio Adrian Bautista Marroquin / 1290-10-9647
- Rodney Osmany Rizo Álvarez  / 1390-20-28058
- Neswin Estuardo Barahona Ajiataz / 0910-20-26158
- Josuá Noé Reyes López / 0906-20-27370

## Diagrama
![Diagrama](https://github.com/josua-reyes/practica1_grupo3/blob/main/Documentaci%C3%B3n/Diagrama.png)

## Comandos GIT utilizados
### Clone

El comando `git clone` se utiliza para crear una copia local de un repositorio remoto en tu máquina. Esto te permite obtener una copia de trabajo de todo el historial de cambios y archivos del repositorio remoto. Por ejemplo:

```shell
git clone <URL_del_repositorio>
```

### Checkout

El comando `git checkout` se utiliza para cambiar entre ramas (branches) o versiones de archivos en Git. Puede usarse para crear nuevas ramas, cambiar entre ramas existentes o deshacer cambios en los archivos. Por ejemplo:

```shell
git checkout <nombre_de_la_rama>
```

### Pull

El comando `git pull` se utiliza para traer los cambios más recientes desde un repositorio remoto y fusionarlos con tu rama local actual. Es equivalente a ejecutar `git fetch` seguido de `git merge`. Por ejemplo:

```shell
git pull origin <nombre_de_la_rama>
```

### Push

El comando `git push` se utiliza para enviar tus cambios locales a un repositorio remoto. Esto es necesario para compartir tus cambios con otros colaboradores o para actualizar el repositorio remoto con tus contribuciones. Por ejemplo:

```shell
git push origin <nombre_de_la_rama>
```

### Tag

El comando `git tag` se utiliza para crear, listar o eliminar etiquetas (tags) en Git. Las etiquetas son referencias estáticas a puntos específicos en la historia del repositorio, generalmente utilizadas para marcar versiones importantes. Por ejemplo:

```shell
git tag <nombre_de_la_etiqueta>
```

### Commit

El comando `git commit` se utiliza para confirmar los cambios en tu área de preparación (staging area) y agregarlos al historial de cambios de Git. Debes proporcionar un mensaje descriptivo para cada confirmación que realices. Por ejemplo:

```shell
git commit -m "Mensaje descriptivo de la confirmación"
```

### Add

El comando `git add` se utiliza para agregar archivos o cambios específicos al área de preparación (staging area) antes de realizar un commit. Esto permite seleccionar qué cambios se incluirán en la próxima confirmación. Por ejemplo:

```shell
git add <nombre_del_archivo>
```

### Merge

El comando `git merge` se utiliza para fusionar una rama con otra. Permite combinar los cambios de una rama en otra, lo que es comúnmente utilizado para incorporar nuevas características o correcciones de errores en la rama principal (por ejemplo, `main` o `master`). Por ejemplo:

```shell
git merge <nombre_de_la_rama_a_fusionar>
```

### Status

El comando `git status` se utiliza para obtener información sobre el estado actual de tu directorio de trabajo y el área de preparación. Te muestra qué archivos están modificados, agregados o sin seguimiento, y te ayuda a entender el estado de tu repositorio en ese momento. Por ejemplo:

```shell
git status
```

### Log

El comando `git log` se utiliza para ver el historial de confirmaciones en un repositorio. Proporciona información detallada sobre cada confirmación, como el autor, la fecha, el mensaje de confirmación y el identificador único (hash). Por ejemplo:

```shell
git log
```
