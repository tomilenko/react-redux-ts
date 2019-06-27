
import * as React from 'react';
import './App.css';

import CharacterList from '../containers/CharacterList';
import CurrentCharacterList from '../containers/CurrentCharacterList';

const App: React.SFC<{}> = () => {
    return (
        <>
            <h1>The Force Awakens</h1>
            <CharacterList />
            <CurrentCharacterList />
        </>
    );
};

export default App;