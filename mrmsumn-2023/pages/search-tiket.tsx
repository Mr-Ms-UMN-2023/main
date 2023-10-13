import { useSearchParams } from "next/navigation";

const SearchTiket = () => {
  const searchParams = useSearchParams();
  const order_id = searchParams.get("order_id");
  console.log(searchParams);
  return (
    <div>
      <div>{searchParams}</div>
    </div>
  );
};

export default SearchTiket;
