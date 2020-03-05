import React from 'react'
import './methodology.css'

function Methodology() {
  return (<div className='Methodology'>
    <div class='block'>
    <td class="leftcol">
      <img src='https://www.geraci.ru/wp-content/uploads/2018/11/Mirzojan-Ekaterina-Sergeevna-Vrach-ultrazvukovoj-diagnostiki-min.png'
        width="180" height="250">
      </img>
    </td>
    <td>
      <p><ul class="list-group">
        <li class="list-group-item list-group-item-primary"><strong>Любовь Васильевна Петрова</strong>
          <p><strong>Специальность: Офтальмолог</strong></p>
        </li>
        <li class="list-group-item">Лекарства: Сульфацил-натрий(капли 3 мл),Альбуцид(капли 5 мл), Ципрофлоксацин (мазь) </li>
        <li class="list-group-item">Процедуры: Плацентарные инъекции Curacen (Rhana) 2 раза в неделю </li>
        <li class="list-group-item">Следующий прием врача: 20.04.20 </li>
        <li class="list-group-item">Форма отчетности:</li>
      </ul>
      </p>
    </td>
    </div>
    <p></p>
    <div class='block'>
    <td class="leftcol">
      <img src='https://www.geraci.ru/wp-content/uploads/2018/11/Kacylo-Andrej-Grigorevich-Vrach-ultrazvukovoj-diagnostiki-min.png'
        width="180" height="250">
      </img>
    </td>
    <td>
      <p>
        <ul class="list-group">
          <li class="list-group-item list-group-item-primary"><strong>Сергей Иванович Мишустин</strong>
            <p><strong>Специальность: Отоларинголог</strong></p>
          </li>
          <li class="list-group-item">Лекарства: Авамис( Спрей Назальный Дозированный 27,5 Мкг/Доза), Длянос( Капли В Нос 0.05% , 10 Мл) </li>
          <li class="list-group-item">Процедуры: Перемещение лекарственных веществ в полости носа по Проетцу (кукушка) 3 раза в неделю </li>
          <li class="list-group-item">Следующий прием врача: 05.05.20 </li>
          <li class="list-group-item">Форма отчетности:</li>
        </ul>
      </p>
    </td>
    </div>
    {/* <img src='https://www.geraci.ru/wp-content/uploads/2018/11/Kacylo-Andrej-Grigorevich-Vrach-ultrazvukovoj-diagnostiki-min.png' width="180" height="250"></img> */}
  </div>)
}
export default Methodology
