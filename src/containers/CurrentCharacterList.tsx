
import * as React from 'react';
import { connect, useDispatch } from 'react-redux';

import { IAppState } from '../store/Store';
import { getCurrentCharacter, CharacterActionTypes } from '../actions/CharacterActions'
import { ICharacter } from '../reducers/characterReducer';

// Create the containers interface
interface IProps {
    currentCharacter: ICharacter[];
}

interface IState {
    count: number
}


const  CurrentCharacterList = (props: IProps) => {

    // public render() {
        const { currentCharacter } = props;
        const dispatch = useDispatch()
        const [count, setCount] = React.useState(1);

        React.useEffect(() => {
            // getCurrentCharacter();
        });

        const handleClick = () => {
            dispatch(getCurrentCharacter(count));
            setCount(count + 1);
        }

        return (
            <div className="name-container">
                <h2>CurrentCharacterList</h2>
                <button onClick={handleClick}>Dispatch</button>

                {currentCharacter &&
                    currentCharacter.map(character => {
                        return (
                            <p key={character.name} className="name">
                                {character.name}
                            </p>
                        );
                    })}
            </div>
        );
    // }
}

// Grab the characters from the store and make them available on props

// const mapDispatchToProps = (dispatch: Dospatch) => {

// }

const mapStateToProps = (store: IAppState) => {
    return {
        currentCharacter: store.characterState.currentCharacter,
    };
};

export default connect(mapStateToProps)(CurrentCharacterList);