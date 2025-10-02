import { useEffect,useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import { Cards } from "../components/UI/Cards";
import { SearchFilter } from "../components/UI/SearchFilter";
export const Country=()=>{
   const [isPending, startTransition] = useTransition();
     const [countries, setCountries] = useState([]);
      const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  useEffect(()=>{
   
    startTransition(async()=>{
    const res = await getCountryData();
    setCountries(res.data);
    })
  },[])
  if (isPending) return <Loader />;
   const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // here is the main logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  // return (
  //   <section className="px-6 py-10 bg-black min-h-screen text-white">
  //     <SearchFilter
  //       search={search}
  //       setSearch={setSearch}
  //       filter={filter}
  //       setFilter={setFilter}
  //       countries={countries}
  //       setCountries={setCountries}
  //     />

  //     <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8">
  //       {filterCountries.map((curCountry, index) => (
  //         <Cards country={curCountry} key={index} />
  //       ))}
  //     </ul>
  //   </section>
  // );
   return (
    <section className="px-6 py-10 bg-black min-h-screen text-white flex flex-col items-center">
      {/* ✅ Search + Filter section centered */}
      <div className="w-full max-w-5xl flex flex-col items-center">
        <SearchFilter
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          countries={countries}
          setCountries={setCountries}
        />
      </div>

      {/* ✅ Cards grid center */}
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 justify-items-center">
        {filterCountries.map((curCountry, index) => (
          <Cards country={curCountry} key={index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;