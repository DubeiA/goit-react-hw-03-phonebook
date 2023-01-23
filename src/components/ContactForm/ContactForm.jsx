import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import css from "../ContactForm/ContactForm.module.css";


export class ContactForm extends Component {

    state = {
        name: '',
        number: '',
    }

      
  handleOnChange = event => {
    const { name, value } = event.currentTarget

    this.setState({[name]: value})
    
  }

      handleSubmit = e => { 
    e.preventDefault() 

        this.props.onSubmit(this.state)
        this.reset()
  }

  reset = () => { 
    this.setState({
      name: '',
      number: ''
    })
  }

    render() { 
        return (
            <form onSubmit = { this.handleSubmit } > 
          
          <label className={css.labelName}> 
            <span className={css.spanName}>Name</span>
            <input className={css.imputName}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={this.state.name}
                onChange={this.handleOnChange}
            />

            <label className={css.labelNumber}>
              <span className={css.spanNumber}>Number</span>
              
            <input className={css.imputName}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={this.state.number}
                onChange={this.handleOnChange}
                
            />
            </label>
            <button type='submit' className={css.buttonSubmit}>Add contact</button>
          </label>
         
        </form>
        )
    
    }
}

// export const ContactForm = ({ onSubmit, name, number, onHandleChange }) => { 
//     return <div>
//          <form onSubmit = { onSubmit } > 
          
//           <label className={css.labelName}> 
//             <span className={css.spanName}>Name</span>
//             <input className={css.imputName}
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                 required
//                 value={name}
//                 onChange={onHandleChange}
//             />

//             <label className={css.labelNumber}>
//               <span className={css.spanNumber}>Number</span>
              
//             <input className={css.imputName}
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                 required
//                 value={number}
//                 onChange={onHandleChange}
                
//             />
//             </label>
//             <button type='submit' className={css.buttonSubmit}>Add contact</button>
//           </label>
         
//         </form>
//      </div>

// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func,
//     value: PropTypes.string,
//   onHandleChange: PropTypes.func,
// };