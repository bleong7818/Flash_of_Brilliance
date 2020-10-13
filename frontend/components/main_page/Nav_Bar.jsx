// import React from 'react';
// import ReactDOM from 'react-dom';
// import SessionForm from '../session_form/session_form';

// class NavBar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {show: false}
//         this.showModal = this.showModal.bind(this)
//         this.hideModal = this.hideModal.bind(this)
//     }

//     showModal() {
//         this.setState( {show: true} )
//     }

//     hideModal() {
//         this.setState( {show: false} )
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Modal</h1>
//                     <SessionForm show={this.state.show} hideModal={this.hideModal} className="modal">
                        
//                     </SessionForm>
//                 <button onClick={this.showModal}>
//                 </button>
//             </div>
//         )
//     }
// }

// export default NavBar;