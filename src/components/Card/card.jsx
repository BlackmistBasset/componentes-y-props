export const Card = ({ nombreGatito, imagenGatito, isLoggedIn, esMimoso }) => {
  console.log(isLoggedIn);
  if (isLoggedIn) {
    return (
      <div
        className={`${
          !esMimoso ? "bg-white" : "bg-cyan-200"
        }   "w-[250px] p-4 border-2 rounded-xl border-cyan-600 white" `}
      >
        <img
          src={imagenGatito}
          alt="Imagen Gatito"
          className="w-full h-[230px] object-cover mb-4"
        />
        <h2 className="font-bold text-center text-cyan-600">{nombreGatito}</h2>
      </div>
    );
  } else {
    return (
      <div className="w-[250px] p-4 border-2 rounded-xl border-cyan-600">
        <h2 className="text-center">
          Debes estar logueado para poder ver estos hermosos gatitos.
        </h2>
        <button className="p-1 border-2 rounded-md mt-3 m-auto block">
          Iniciar sesión
        </button>
      </div>
    );
  }
};
