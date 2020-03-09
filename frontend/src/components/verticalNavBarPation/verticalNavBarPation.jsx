import React from 'react';
import Methodology from '../Methodology/Methodology';


function VerticalNavBarPation() {
  return (
    <>
      {/* <div>
      <Nav vertical>
        <NavItem>
          <NavLink class="nav-link" href="#activeTasks" aria-selected="true">Активные задачи</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#methodology" aria-selected="false" >Методика лечения</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#personalArea" aria-controls="messages" aria-selected="false">Личный кабинет</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#personalAnalyzes">Мои анализы</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#personalsDoctor">Мои врачи</NavLink>
        </NavItem>
      </Nav>
    </div> */}
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a className="nav-link active" id="v-pills-activeTasks-tab" data-toggle="pill" href="#v-pills-activeTasks" role="tab" aria-controls="v-pills-activeTasks" aria-selected="true">Активные задачи</a>
            <a className="nav-link" id="v-pills-methodology-tab" data-toggle="pill" href="#v-pills-methodology" role="tab" aria-controls="v-pills-methodology" aria-selected="false">Методика лечения</a>
            <a className="nav-link" id="v-pills-personalArea-tab" data-toggle="pill" href="#v-pills-personalArea" role="tab" aria-controls="v-pills-personalArea" aria-selected="false">Личный кабинет</a>
            <a className="nav-link" id="v-pills-personalAnalyzes-tab" data-toggle="pill" href="#v-pills-personalAnalyzes" role="tab" aria-controls="v-pills-personalAnalyzes" aria-selected="false">Мои анализы</a>
            <a className="nav-link" id="v-pills-personalsDoctor-tab" data-toggle="pill" href="#v-pills-personalsDoctor" role="tab" aria-controls="v-pills-personalsDoctor" aria-selected="false">Мои врачи</a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-activeTasks" role="tabpanel" aria-labelledby="v-pills-activeTasks-tab">123</div>
            <div className="tab-pane fade" id="v-pills-methodology" role="tabpanel" aria-labelledby="v-pills-methodology-tab"><Methodology /></div>
            <div className="tab-pane fade" id="v-pills-personalArea" role="tabpanel" aria-labelledby="v-pills-personalArea-tab">456</div>
            <div className="tab-pane fade" id="v-pills-personalAnalyzes" role="tabpanel" aria-labelledby="v-pills-personalAnalyzes-tab">657</div>
            <div className="tab-pane fade" id="v-pills-personalsDoctor" role="tabpanel" aria-labelledby="v-pills-personalsDoctor-tab">856</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default VerticalNavBarPation;
