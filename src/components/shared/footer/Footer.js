import React, {Component} from 'react';

class Footer extends Component{
    //----------------------------------------------------------------------//
    // Metodo render()                                                      //
    //----------------------------------------------------------------------//     
    render(){
        // Log de seguimiento
        console.log('FooterComponent - Metodo render()');

        return (
        <footer id="footer">
            <div className="cewnter">
                <p><i>Copyright &copy; - Zamblera Lucas Daniel - 2023</i></p>
            </div>
        </footer>
        );
    }
}

export default Footer;