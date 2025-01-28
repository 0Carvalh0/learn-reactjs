function List() {
  const items = [
    {
      id: 1,
      nome: "João",
    },
    {
      id: 2,
      nome: "Lucas",
    },
    {
      id: 3,
      nome: "Arthur",
    },
  ];

  return (
    <div>
      {items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.nome}
        </p>
      ))}
    </div>
  );
}

export default List;
