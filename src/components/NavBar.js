import React from 'react'

export default function NavBar(props) {
    return (
       <nav class="sticky-top py-1 nav">
        <div class="container col-4 ">
         
          <a class="py-2 d-none d-md-inline-block nav-style" href="#">Tour</a>
          <a class="py-2 d-none d-md-inline-block nav-style" href="#">Product</a>
          <a class="py-2 d-none d-md-inline-block nav-style" href="#">Features</a>
          <a class="py-2 d-none d-md-inline-block nav-style" href="#">Enterprise</a>
          <a class="py-2 d-none d-md-inline-block nav-style" href="#">Support</a>
          <a class="py-2 d-none d-md-inline-block nav-style" href="#">Pricing</a>
          <a class="py-2 d-none d-md-inline-block nav-style" href="#">Cart</a>
        </div>
        <div class="container col-3">
        <i class="fa fa-hand-scissors fa-2x"></i>
        <i class="fa fa-hand-rock fa-2x"></i>
        <i class="fa fa-hand-paper fa-2x"></i>
        </div>
        <div class="container col-2"></div>
        
       
      </nav>
    )
}
