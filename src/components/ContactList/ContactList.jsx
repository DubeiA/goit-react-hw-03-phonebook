import css from '../ContactList/ContactList.module.css'

export const ContactList = ({contacts , onDeleteContact}) => ( 

    <ul className={css.list}>
      {
        contacts.map(contact => {

          return <li className={css.item} key={contact.id}> {contact.name} : {contact.number}
            <button className={css.item__button}  onClick={() => onDeleteContact(contact.id)}>Видалити</button>
          </li>
          
    })

     }
   </ul>
)