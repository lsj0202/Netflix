import React from 'react'
import * as A from './MovieModal'

function MovieModal(backdrop_path, title, overview, name, release_date,first_air_date,vote_average, setModalOpen) {
  return (
    <A.presentation>
        <A.wrapper_modal>
            <A.modal>
                <A.modal_close onClick = {() => setModalOpen(false)}>
                    X
                </A.modal_close>
            </A.modal>

            <A.modal__poster_img
                src={`https://image.tmdb.org/t/original/${backdrop_path}`}
                alt= 'modal__poster_img'
            />
            <A.modal__content>
                <A.modal__details>
                    <A.modal__user_perc>
                        100% for you
                    </A.modal__user_perc>
                </A.modal__details>
            </A.modal__content>
        </A.wrapper_modal>
    </A.presentation>
  )
}

export default MovieModal;