
/**
listar comentários: comments/FETCH
votar positivo: comments/VOTE_UP
votar negativo: comments/VOTE_DOWN
criar comentário: comments/NEW
editar comentário: comments/EDIT
remover comentário: comments/DELETE
 */


const prevState = {
  categories: [],
}

export default function (state = prevState, action) {
  switch (action) {
    case 'ACION':
      return state

    default:
      return state
  }
}
