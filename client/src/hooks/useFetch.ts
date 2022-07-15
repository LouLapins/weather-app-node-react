import { useEffect, useState } from "react"

const useFetch = (path: string) => {
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      try {
        const res = await fetch(path)
        const json = await res.json()
        setData(json)

      } catch (error) {
        setError(error)
        console.log(error)
      }
      setLoading(false)

    }
    fetchData()
	
  }, [path, setData])

  return { data, error, loading }
}
export default useFetch
