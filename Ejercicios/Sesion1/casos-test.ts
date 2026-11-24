type Prioridad = "alta" | "media" | "baja";

type Caso = {
  id: number;
  titulo: string;
  prioridad: Prioridad;
  ejecutado: boolean;
};

type ConteoPrioridades = Record<Prioridad, number>;

const casosDePrueba: Caso[] = [
  { id: 1, titulo: "Prueba de inicio de sesión", prioridad: "alta", ejecutado: true },
  { id: 2, titulo: "Prueba de registro de usuario", prioridad: "media", ejecutado: false },
  { id: 3, titulo: "Prueba de recuperación de contraseña", prioridad: "baja", ejecutado: false },
  { id: 4, titulo: "Prueba de actualización de perfil", prioridad: "media", ejecutado: true },
  { id: 5, titulo: "Prueba de eliminación de cuenta", prioridad: "alta", ejecutado: false },
];

function contarPorPrioridad(casos: Caso[]): ConteoPrioridades {
  const resultado: ConteoPrioridades = {
    alta: 0,
    media: 0,
    baja: 0,
  };

  casos.forEach((caso) => {
    resultado[caso.prioridad]++;
  });

  return resultado;
}

console.log(contarPorPrioridad(casosDePrueba));  
function listarPendientes(casos: Caso[]): caso[]{
  return casos.filter((caso) => caso.ejecutado === false);
} 
console.log(listarPendientes(casosDePrueba));
const formatearCaso = (caso: Caso): string => {
  const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";

  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};
casosDePrueba.forEach((caso) => {
  console.log(formatearCaso(caso));
  });
  