import React, { useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCars } from '../redux/actions/carsAction';
import { Row, Col } from 'antd';
import Spinner from '../components/Spinner';

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const { loading } = useSelector((state) => state.alertsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <DefaultLayout>
      {loading && <Spinner />}
      <Row justify={'center'} className='mt-1'>
        {cars.map((car) => (
          <Col key={car._id} lg={5} sm={24} xs={24}>
            <div className='car p-2 bs1 mt-3 '>
              <img src={car.image} alt={car.name} className='carimg' />

              <div className='car-content d-flex align-items-center justify-content-left'>
                <div>
                  <p> {car.name}</p>
                  <p> RentPerHour-{car.rentPerHour}/-</p>
                </div>

                <div>
                  <button className='btm1 mr-2'>Book Now</button>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </DefaultLayout>
  );
}

export default Home;
