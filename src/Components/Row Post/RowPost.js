import React, { useEffect } from 'react'
import YouTube from 'react-youtube';
import Swal from 'sweetalert2'
import './RowPost.css'
import { useState } from 'react'
import axios from '../../axios'
import { API_KEY, imgUrl } from '../../constants/constants'
import ModalVideo from 'react-modal-video'



function RowPost(props) {
    const opts = {
        height: '720px',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }
    const [card, setCard] = useState([])
    const [video, setVideo] = useState('')

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    const playMovie = (id) => {
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
            console.log(response.data)
            if (response.data.results.length !== 0) {
                setVideo(response.data.results[0])
                console.log(setVideo)
            }

        })
    }
    useEffect(() => {
        axios.get(props.url).then((response) => {
            console.log(response.data)
            setCard(response.data.results)
        })
    }, [])
    return (
        <div className='row'>
            <h2>{props.title}</h2>

            <div className='posters'>
                {
                    card.map((movie) =>
                        <img onClick={() => playMovie(movie.id)} className='poster' src={`${imgUrl + movie.poster_path}`} alt="poster" />

                    )
                }

            </div>

                {
                    video && <ModalVideo channel='youtube' autoplay isOpen={video} videoId={video.key} onClose={() => {
                        setVideo(null)
                    }} />
                }

        </div>
    )
}

export default RowPost
