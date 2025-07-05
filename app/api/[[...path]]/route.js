import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/mura_fitness';
let client;

async function connectToDatabase() {
  if (!client) {
    client = new MongoClient(MONGO_URL);
    await client.connect();
  }
  return client.db('mura_fitness');
}

// GET - Fetch data
export async function GET(request, { params }) {
  try {
    const path = params.path ? params.path.join('/') : '';
    const db = await connectToDatabase();
    
    switch (path) {
      case 'classes':
        const classes = await db.collection('classes').find({}).toArray();
        return NextResponse.json(classes);
      
      case 'pricing':
        const pricing = await db.collection('pricing').find({}).toArray();
        return NextResponse.json(pricing);
      
      case 'coaches':
        const coaches = await db.collection('coaches').find({}).toArray();
        return NextResponse.json(coaches);
      
      case 'testimonials':
        const testimonials = await db.collection('testimonials').find({}).toArray();
        return NextResponse.json(testimonials);
      
      case 'memberships':
        const memberships = await db.collection('memberships').find({}).toArray();
        return NextResponse.json(memberships);
      
      default:
        return NextResponse.json({ message: 'Welcome to MURA Fitness API' });
    }
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST - Create new data
export async function POST(request, { params }) {
  try {
    const path = params.path ? params.path.join('/') : '';
    const body = await request.json();
    const db = await connectToDatabase();
    
    switch (path) {
      case 'contact':
        const contactData = {
          ...body,
          createdAt: new Date().toISOString(),
          id: Date.now().toString()
        };
        await db.collection('contacts').insertOne(contactData);
        return NextResponse.json({ message: 'Contact form submitted successfully', data: contactData });
      
      case 'memberships':
        const membershipData = {
          ...body,
          createdAt: new Date().toISOString(),
          id: Date.now().toString()
        };
        await db.collection('memberships').insertOne(membershipData);
        return NextResponse.json({ message: 'Membership created successfully', data: membershipData });
      
      case 'bookings':
        const bookingData = {
          ...body,
          createdAt: new Date().toISOString(),
          id: Date.now().toString(),
          status: 'pending'
        };
        await db.collection('bookings').insertOne(bookingData);
        return NextResponse.json({ message: 'Booking created successfully', data: bookingData });
      
      default:
        return NextResponse.json({ error: 'Invalid endpoint' }, { status: 404 });
    }
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT - Update existing data
export async function PUT(request, { params }) {
  try {
    const path = params.path ? params.path.join('/') : '';
    const body = await request.json();
    const db = await connectToDatabase();
    
    const pathParts = path.split('/');
    const collection = pathParts[0];
    const id = pathParts[1];
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required for updating' }, { status: 400 });
    }
    
    const updateData = {
      ...body,
      updatedAt: new Date().toISOString()
    };
    
    const result = await db.collection(collection).updateOne(
      { id: id },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Record updated successfully' });
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE - Delete data
export async function DELETE(request, { params }) {
  try {
    const path = params.path ? params.path.join('/') : '';
    const db = await connectToDatabase();
    
    const pathParts = path.split('/');
    const collection = pathParts[0];
    const id = pathParts[1];
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required for deletion' }, { status: 400 });
    }
    
    const result = await db.collection(collection).deleteOne({ id: id });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Record not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Record deleted successfully' });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}