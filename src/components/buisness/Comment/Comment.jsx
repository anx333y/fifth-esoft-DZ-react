import "./Comment.css";

export const Comment = ({
	avatarUrl = '/src/assets/defaultImages/default-avatar.jpg',
	userName = 'Неопознаный баобаб',
	time = 'когда-то',
	content = 'Пустой комментарий :(',
}) => {

	let formatDate = new Date(time);
	formatDate = formatDate.toLocaleString();

	return (
		<div className="comment">
			<div className="comment__header">
				<div className="comment__header__avatar">
					<img className="comment__header__avatar-image" src={avatarUrl} alt={'аватар пользователя ' + userName} />
				</div>
				<div className="comment__header__info">
					<h5 className="comment__header__user-name">{userName}</h5>
					<span className="comment__header__time">{formatDate}</span>
				</div>
			</div>
			<div className="comment-content">{content}</div>
		</div>
	)
};