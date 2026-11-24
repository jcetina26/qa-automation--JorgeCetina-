interface CasoDeTest {
  id: number;
  titulo: string;
  prioridad: string;
  ejecutado: boolean;
}
const casosDeTest: CasoDeTest[] = [
  {
    id: 1,
    titulo: "Login de usuario",
    prioridad: "alta",
    ejecutado: true,
  },
  {
    id: 2,
    titulo: "Registro de usuario",
    prioridad: "media",
    ejecutado: false,
  },
  {
    id: 3,
    titulo: "Recuperación de contraseña",
    prioridad: "baja",
    ejecutado: false,
  },
];
function obtenerCasosDeTest(): Promise<CasoDeTest[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(casosDeTest);
    }, 500);
  });
}
const formatearCaso = (caso: CasoDeTest): string => {
  const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};
async function main() {
  const casos = await obtenerCasosDeTest();
  casos.forEach((caso) => {
    console.log(formatearCaso(caso));
  });
}
main();