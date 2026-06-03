# DOM + Fetch - Ejercicio

### Instrucciones

Dado el siguiente HTML:

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FETCH</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
</head>

<body>

    <h1>Catalogo de productos</h1>
    <main id="prodContainer" class="container">
        <div id="prodRow" class="row">
            <!-- Inserta aquí los productos -->
        </div>
    </main>

    <button type="button" class="btn btn-success">Mostrar productos</button>
    <script src="./javascript/main.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI"
        crossorigin="anonymous"></script>
</body>

</html>
```

Inserta diferentes productos traídos desde Fakestore API.

---
### Idea de funcionamiento

Al hacer click en el botón

```
<button type="button" class="btn btn-success">Mostrar productos</button>
```

Se debe mandar a llamar a la API. Posteriormente, se insertarán cards de bootstrap donde se muestren los siguientes datos:

1. Imagen del producto
2. Nombre del producto
3. Categoría del producto
4. Precio del producto

Las cards deberán acomodarse de 4 en 4 horizontalmente en la pantalla. Hasta que se terminen los productos.

Pista: revisa bien la estructura HTML y recuerda como se construye el grid de bootstrap

Recuerda: los productos que devuelve la API se encuentran dentro de un arreglo

### Investiga:

insertAdjacentHTML.

---
### Entregables

Sube tu trabajo a un repositorio en GitHub.

Comparte la URL en el siguiente link: https://generation.instructure.com/courses/4507/assignments/340918

---
### Recursos

Cards - Bootstrap: https://getbootstrap.com/docs/5.3/components/card/

insertAdjacentHTML - MDN: https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML

Consejo: la documentación de MDN en inglés es más completa.