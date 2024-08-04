import "./FilmComments.css";
import { AddCommentForm } from "../AddCommentForm/AddCommentForm";

import { useDispatch, useSelector } from "react-redux";
import { Comment } from "../Comment/Comment";
import { memo } from "react";

export default function FilmComments ({filmId}) {
	const comments = useSelector(state => state.comments.data);

	return (
		<section className="film-comments">
			<h2 className="film-comments-title">Комментарии:</h2>
			<div className="film-comments-list">
				<AddCommentForm filmId={filmId}/>
				{
					(comments[filmId] && Object.keys(comments).length)
					? ([...comments[filmId]].reverse().map((comment) => (
						<Comment
							key={comment.id}
							{ ...comment }
						/>
					)))
					: (<span>Комментарии отсутствуют :(</span>)
				}
			</div>
		</section>
	)
};