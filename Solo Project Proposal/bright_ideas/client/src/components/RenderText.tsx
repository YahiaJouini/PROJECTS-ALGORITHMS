import { useEffect } from 'react'
import useFetchById from '../hooks/useFetchById'

type textType = {
    id: string
    name?: Boolean
}
const RenderText = ({ id, name }: textType) => {

    const { fetchById, data } = useFetchById()
    useEffect(() => {
        fetchById(id)
    }, [])
    if (name) {
        return (
            <>{data?.name}</>
        )
    }
    return <>{data?.username}</>

}

export default RenderText