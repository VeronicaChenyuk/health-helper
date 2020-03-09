import React from 'react';
import './Methodology.css';

function Methodology() {
  return (
    <div className="Methodology">
      <div className="block">
        <td className="leftcol">
          <img
            src="https://www.geraci.ru/wp-content/uploads/2018/11/Mirzojan-Ekaterina-Sergeevna-Vrach-ultrazvukovoj-diagnostiki-min.png"
            width="180"
            height="250"
          />
        </td>
        <td>
          <p>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">
                <strong>Любовь Васильевна Петрова</strong>
                <p><strong>Специальность: Офтальмолог</strong></p>
              </li>
              <li className="list-group-item">Лекарства: Сульфацил-натрий(капли 3 мл),Альбуцид(капли 5 мл), Ципрофлоксацин (мазь) </li>
              <li className="list-group-item">Процедуры: Плацентарные инъекции Curacen (Rhana) 2 раза в неделю </li>
              <li className="list-group-item">Следующий прием врача: 20.04.20 </li>
              <li className="list-group-item">Форма отчетности:</li>
            </ul>
          </p>
        </td>
      </div>
      <p />
      <div className="block">
        <td className="leftcol">
          <img
            src="https://www.geraci.ru/wp-content/uploads/2018/11/Kacylo-Andrej-Grigorevich-Vrach-ultrazvukovoj-diagnostiki-min.png"
            width="180"
            height="250"
          />
        </td>
        <td>
          <p>
            <ul className="list-group">
              <li className="list-group-item list-group-item-primary">
                <strong>Сергей Иванович Мишустин</strong>
                <p><strong>Специальность: Отоларинголог</strong></p>
              </li>
              <li className="list-group-item">Лекарства: Авамис( Спрей Назальный Дозированный 27,5 Мкг/Доза), Длянос( Капли В Нос 0.05% , 10 Мл) </li>
              <li className="list-group-item">Процедуры: Перемещение лекарственных веществ в полости носа по Проетцу (кукушка) 3 раза в неделю </li>
              <li className="list-group-item">Следующий прием врача: 05.05.20 </li>
              <li className="list-group-item">Форма отчетности:</li>
            </ul>
          </p>
        </td>
      </div>
      {/* <img src='https://www.geraci.ru/wp-content/uploads/2018/11/Kacylo-Andrej-Grigorevich-Vrach-ultrazvukovoj-diagnostiki-min.png' width="180" height="250"></img> */}
    </div>
  );
}
export default Methodology;
