import * as React from 'react';
import styles from './SpgithubwebinarWebpart.module.scss';
import { ISpgithubwebinarWebpartProps } from './ISpgithubwebinarWebpartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SpgithubwebinarWebpart extends React.Component<ISpgithubwebinarWebpartProps, {}> {
  public render(): React.ReactElement<ISpgithubwebinarWebpartProps> {
    return (
      <div className={ styles.spgithubwebinarWebpart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to webinar git hub integration!</span>
              <p className={ styles.subTitle }>integrate with githuband Azure devops.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
