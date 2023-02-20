import React from 'react';
import * as A from './FooterStyle';

function Footer() {
  return (
    <A.FooterContainer>
        <A.FooterContent>
            <A.FooterLinkContainer>
                <A.FooterLinkTitle>넷플릭스 대한민국</A.FooterLinkTitle>
                <A.FooterLinkContent>
                    <A.FooterLink href='https://help.netflix.com/ko/node/412'>넷플릭스 소개</A.FooterLink>
                    <A.FooterLink href='https://help.netflix.com/ko/node/412'>고객센터</A.FooterLink>
                    <A.FooterLink href='https://help.netflix.com/ko/node/412'>미디어 센터</A.FooterLink>
                    <A.FooterLink href='https://help.netflix.com/ko/node/412'>이용 약관</A.FooterLink>
                </A.FooterLinkContent>
                <A.FooterDescContainer>
                    <A.FooterDescRights>
                        NET FLIX RIGHTS RESERVED
                    </A.FooterDescRights>
                </A.FooterDescContainer>
            </A.FooterLinkContainer>
        </A.FooterContent>
    </A.FooterContainer>
  )
}

export default Footer;