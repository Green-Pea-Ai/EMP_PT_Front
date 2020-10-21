import React from 'react'
import { Link } from 'react-router-dom'

export const UserMenu = () => (<nav>
    <ol>
        <li><Link to='/sign_up_user'>회원가입</Link></li>
        <li><Link to='/sign_in_user'>로그인</Link></li>
        <li><Link to='/mypage_user'>마이 페이지</Link></li>
        <li><Link to='/info_modify_user'>내 정보 수정</Link></li>
        <li><Link to='/membership_withdrawal_user'>멤버십 취소</Link></li>
    </ol>
</nav>)

export const CheeseMenu = () => (<nav>
    <ol>
        <li><Link to='/list_cheese'>치즈 제품 리스트</Link></li>
        <li><Link to='/register_cheese'>치즈 등록</Link></li>
        <li><Link to='/modify_cheese'>치즈 정보 수정</Link></li>
        <li><Link to='/remove_cheese'>치즈 삭제</Link></li>
    </ol>

</nav>)

export const BoardMenu = () => (<nav>
    <ol>
        <li><Link to='/write_board'>글 등록</Link></li>
        <li><Link to='/list_board'>작성글 리스트</Link></li>
        <li><Link to='/read_board'>글 읽기</Link></li>
        <li><Link to='/edit_board'>글 수정</Link></li>
        <li><Link to='/delete_board'>글 삭제</Link></li>

    </ol>
</nav>)

export const SurveyMenu = () => (<nav>
    <ol>
        <li><Link to='/write_survey'>설문 작성</Link></li>
        <li><Link to='/list_survey'>작성했던 설문 리스트</Link></li>
        <li><Link to='/read_survey'>작성했던 설문 읽기</Link></li>
    </ol>

</nav>)