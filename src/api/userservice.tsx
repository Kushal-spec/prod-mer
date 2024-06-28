import React, { useEffect, useState } from 'react';

import { Button, Card, Modal } from 'antd';

import HistoryTable from '../HistoryTable/HistoryTable';

import {Spin} from 'antd'

interface Movie {
  title: string;
  overview: string;
  poster_path: string;
}



const Userservice: React.FC = () => {

  

  const [movie, setMovie] = useState<Movie | null>(null);
  const [modal2Open, setModal2Open] = useState(false);
  useEffect(() => {
    chrome.storage.local.get(['currentMovie'], (result) => {
      setMovie(result.currentMovie);
      console.log("Movies fetched",movie);
      
    });
  }, []);

  if (!movie) {
    return <h1><Spin/></h1>;
  }

  return (
    <div>
      <div style={{ paddingLeft: '88%' }}>
        <Button type="primary" onClick={() => setModal2Open(true)}>
         Movie History
        </Button>
        <Modal
          title="History"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <HistoryTable />
        </Modal>
      </div>
      <div>
        <Card style={{width:'50%',height:'50%'}}>
          <h2>{movie.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
          <p>{movie.overview}</p>

        </Card>
      </div>

    </div>
  );

};

export default Userservice;
