import React from 'react'
import servant from '../../assets/images/icons/servant-logo.png'
import applee from '../../assets/images/icons/apple-tv-logo.png'
function Fifth() {
  return (
  <section className="fifth-heghlight-wrapper"> 
			<div className="left-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						<img src={applee}/>
				</div>
				</div>

				<div className="tvshow-logo-wraper">
					<img src={servant}/>
				</div>

				<div className="watch-more-wrapper">
					<a href="#">Watch the trailer</a>
				</div>
			</div>
			<div className="right-side-wrapper">
				<div className="top-logo-wrapper">
					<div className="logo-wrapper">
						AirPods Pro
					</div>
				</div>

				<div className="description-wraper">
					Magic like you’ve never heard.
				</div>

				<div className="links-wrapper">
					<ul>
						<li><a href="">Learn more</a></li>
						<li><a href="">Buy</a></li>
					</ul> 
				</div>
			</div>	
		</section>
  )
}

export default Fifth