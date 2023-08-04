# Flexbox

<a name="top"></a>

```css 

#my-conte {
    display:flex;
    ...

}

```

## justify-content

Alinea los elementos flex a lo largo del eje principal

- flex-start(default)
- flex-end
- center
- space-between
- space-around
- space-evenly

## align-items

Alinea elementos Flex a lo largo del eje transversal

- flex-start
- flex-end
- center
- baseline
- stretch(default)

## flex-direction

Define la dirección del eje principal

- row (default)
- row-reverse
- column
- column-reverse
  
## order

Especifica el ordren de los elementos flex

- \<integer>(...,-1,0(default),1,...)
  
## align-self

Alinea un elemento flex a lo largo del eje transversal, anulando el valor de align-items

- flex-start 
- flex-end
- center 
- baseline
- stretch
  
## flex-wrap

Especifica si los elementos flex son forzados a una sola línea o pueden ser envueltos en multiples líneas 

- nowrap(default)
- wrap
- wrap-reverse
  
## flex-flow

Abreviación de las propiedades de flex-direction y flex-wrap

\<flex-direction> \<flex-wrap>

## align-content 

Alinea las líneas de un contenedor flex cuando exista más espacio en el eje transversal

- flex-start
- flex-end
- center
- space-between
- space-around 
- space-evenly
- stretch(default)