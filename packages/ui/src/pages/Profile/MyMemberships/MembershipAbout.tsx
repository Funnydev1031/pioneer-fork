import React from 'react'
import styled from 'styled-components'
import { Membership } from '@joystream/types/members'
import { CloseButton } from '../../../components/buttons'
import { Avatar } from './Member'

interface MembershipAboutProps {
  member: Membership
  onClose: () => void
}

export const MembershipAbout = ({ member, onClose }: MembershipAboutProps) => {
  return (
    <SidePane>
      <CloseButton onClick={onClose} />
      <Avatar src={member.avatar_uri.toString()} />
      <p>{member.handle}</p>
      <h5>About</h5>
      <div>{member.about}</div>
    </SidePane>
  )
}

const SidePane = styled.div`
  border: 1px solid #444;
  background: #aaa;
`
