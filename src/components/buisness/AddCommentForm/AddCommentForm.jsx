import { useState } from "react";
import "./AddCommentForm.css";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../../store/commentsSlice";

export const AddCommentForm = ({ filmId }) => {
	const dispatch = useDispatch();

	const [formValue, setFormValue] = useState({
		name: '',
		content: '',
	});

	const sendComment = () => {
		const sentContent = {id: Date.now()}
		if (formValue.name) {
			sentContent.userName = formValue.name;
		}
		if (formValue.content) {
			sentContent.content = formValue.content;
		}
		dispatch(addComment({
			id: filmId,
			content: {
				...sentContent,
				time: Date.now(),
			}
		}));
		setFormValue({
			name: '',
			content: '',
		})
	};

	const handleChange = (e, type) => {
		setFormValue((value) => ({...value, [type]: e.target.value}))
	};

	return (
		<div className="comment add-comment">
			<div className="comment__header">
				<div className="comment__header__avatar">
					<img className="comment__header__avatar-image" src="/src/assets/defaultImages/default-avatar.jpg" alt="аватар пользователя" />
				</div>
				<div className="comment__header__info">
					<TextField
						placeholder="Имя..."
						size="small"
						variant="filled"
						sx={{
							"& input": {color: 'primary.light'},
							bgcolor: 'primary.dark',
						}}
						value={formValue.name}
						onChange={(e) => handleChange(e, 'name')}
					/>
				</div>
			</div>
			<div className="comment-content">
				<TextField
					placeholder="Комментарий..."
					fullWidth
					multiline
					variant="filled"
					sx={{
						"& textarea": {color: 'primary.light'},
						bgcolor: 'primary.dark',
					}}
					value={formValue.content}
					onChange={(e) => handleChange(e, 'content')}
				/>
			</div>
			<div className="add-comment__send-button">
				<Button
					color='button'
					variant="contained"
					onClick={() => sendComment()}
				>
					Отправить
				</Button>
			</div>
		</div>
	)
};